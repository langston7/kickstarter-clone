from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Project, Backer, db
from app.forms import BackerForm
from app.utils import validation_errors_to_error_messages

backer_routes = Blueprint('backers', __name__)

@backer_routes.route('/', methods=['POST'])
@login_required
def post_backer():
  form = BackerForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    backer = Backer(
      amount = form.data['additional_funding'],
      user_id = form.data['user_id'],
      project_id = form.data['project_id'],
    )
    project = Project.query.get(form.data['project_id'])
    project.current_funding = project.current_funding + form.data['additional_funding']
    db.session.add(project)
    db.session.add(backer)
    db.session.commit()
    return {
      'backer': backer.to_dict(),
      'total_backers': project.total_unique_backers()
    }
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401
