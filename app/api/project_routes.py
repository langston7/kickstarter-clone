from flask import Blueprint, request, jsonify
from app.forms import BackerForm
from flask_login import login_required, current_user
from app.models import Project, db
from app.forms import ProjectForm
from app.aws import (upload_file_to_s3, allowed_file, get_unique_filename)
import random

project_routes = Blueprint('projects', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

#GET all
@project_routes.route('/', methods=['GET'])
def get_AllProjects():
  projects = Project.query.all()
  allProjects = {"projects":[project.to_dict() for project in projects]}
  return allProjects

#GET one
@project_routes.route('/<int:id>')
def get_project(id):
  project = Project.query.get(id)
  return project.to_dict()

#PUT
@project_routes.route('/<int:id>', methods=['PUT'])
def put_project(id):
  project = Project.query.get(id)
  form = ProjectForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    for key, val in form.data.items():
      if key != 'csrf_token':
        setattr(project, key, val)
    db.session.commit()
    return project.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#POST
@project_routes.route('/', methods=['POST'])
@login_required
def post_project():
  form = ProjectForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    project = Project(
      user_id = (form.data['user_id']),
      tag_id = (form.data['tag_id']),
      title = (form.data['title'] if form.data['title'] else 'Default Title'),
      description = (form.data['description'] if form.data['description'] else 'Default description'),
    )
    db.session.add(project)
    db.session.commit()
    return project.to_dict()
  else:
    return {'error': 'Form did not validate'}, 401

#DELETE
@project_routes.route('/<int:id>', methods=['DELETE'])
def delete_project(id):
  project = Project.query.get(id)
  if current_user.id == project.user_id:
    db.session.delete(project)
    db.session.commit()
    return {'message': 'Project deleted'}
  else:
    return {'error': 'Unauthorized'}

#Returns 4 random projects
@project_routes.route('/random')
def get_random_projects():
  projects_db = Project.query.all()
  projects = [project.to_dict() for project in projects_db]
  random_nums = random.sample(range(0, len(projects_db)), 4)

  return jsonify([projects[n] for n in random_nums])


@project_routes.route('/<int:id>/funding', methods=['PUT'])
@login_required
def add_funding(id):
  form = BackerForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    project = Project.query.get(id)
    project.current_funding = project.current_funding + form.data['additional_funding']
    db.session.commit()
    return {'current_funding': project.current_funding}
  else:
    return {'error': validation_errors_to_error_messages(form.errors)}, 401


@project_routes.route('/<int:id>/images', methods=['POST'])
@login_required
def post_image(id):
  form = ProjectForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form:
    if "image" not in request.files:
      return {'errors': 'image required'}, 404

    image = request.files["image"]
    if not allowed_file(image.filename):
      return {'errors': 'file type not permitted'}, 400

    image.filename = get_unique_filename(image.filename)
    print(image.filename)
    print(type(image.filename))
    upload = upload_file_to_s3(image)
    print(upload)
    if 'url' not in upload:
      print("BALLS")
      return upload, 400

    project = Project.query.get(id)
    project.image_src = upload['url']
    db.session.commit()
    return {'image_src': upload['url']}
  else:
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
