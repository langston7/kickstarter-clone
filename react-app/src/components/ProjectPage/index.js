import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, NavLink, useParams, useRouteMatch, useHistory, } from 'react-router-dom';
import Campaign from './Campaign';
import UpdatesSection from './UpdatesSection';
import CommentsSection from '../CommentsSection';
import BackerForm from './BackerForm';
import Modal from '../Modal';
import { clear_project, getProject } from '../../store/project';
import './ProjectPage.css'
import UpdatePage from './UpdatesSection/UpdatePage';
import FAQsection from './FAQsection';

const ProjectPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { projectId } = useParams();
  const { user } = useSelector(state => state.session);
  const { campaign, updates, faqs } = useSelector(state => state.project);
  const { id, title, description, video_src, image_src, current_funding, pledge_goal, comments, tag, username, user_id, end_date, total_backers} = useSelector(state => state.project)
  const { path, url } = useRouteMatch(); //Allows for backwards compatibility of route names

  const [loaded, setLoaded] = useState(false);
  const [show, setShow] = useState(false);

  const differenceByDays = (date1, date2) => {
    const timeDelta = Math.abs(date2 - date1);
    const dayDelta = Math.ceil(timeDelta / (1000 * 60 * 60 * 24));
    return dayDelta;
  }

  const deleteProject = async e => {
    const response = await fetch(`/api/projects/${projectId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      await response.json();
    } else {
      const data = await response.json();
      alert(data.error);
    }
    history.push('/');
  }

  useEffect(() => {
    dispatch(getProject(projectId));
    setLoaded(true);
    return () => {
      dispatch(clear_project());
    }
  }, [dispatch, projectId])

  if (!loaded) {
    return null;
  }

  return (
    <div id='project-container'>
      <div id='project-header'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div id='project-body'>
        <div id='project-left-col'>
          <div id='project-image-conatiner'>
            {video_src ?
              <iframe id='project-video' src={video_src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
              : <img id='project-image' src={image_src} alt="" />
            }
          </div>
          <div id='project-minor-info'>
            <span>Project we love</span>
            <span>{tag}</span>
            <span>{username}</span>
            {
              user?.id === user_id &&
              <>
                <NavLink to={`/projects/${projectId}/edit/basics`} className='btn btn-edit project-minor-btn'>Edit</NavLink>
                <button onClick={deleteProject} className='btn btn-delete project-minor-btn' id='project-delete-btn'>Delete</button>
              </>
            }
          </div>
        </div>
        <div id='project-pledge'>
          <div id='project-progress-bar'>
            <div id='project-progress' style={{ width: `clamp(0%, ${(current_funding / pledge_goal) * 100}%, 100%)` }} />
          </div>
          <div id='project-info-container'>
            <div>
              <div className='project-main-info-header pledge-amount'>
                <span>${current_funding}</span>
              </div>
              <span className='project-main-info-description'>pledged of ${pledge_goal} goal</span>
            </div>
            <div>
              <div className='project-main-info-header'>
                <span>{total_backers}</span>
              </div>
              <span className='project-main-info-description'>backers</span>
            </div>
            <div>
              <div className='project-main-info-header'>
                <span>{differenceByDays(new Date(), new Date(end_date))}</span>
              </div>
              <span className='project-main-info-description'>days to go</span>
            </div>
          </div>
          <div>
            <button className='btn btn-primary' id='pledge-btn' onClick={() => {user ? setShow(true) : history.push('/login')}} >
              Back this project
            </button>
            <Modal title='Back this project' onClose={() => setShow(false)} show={show}>
              <BackerForm setShow={setShow} project_id={projectId} user_id={user?.id}/>
            </Modal>
          </div>
        </div>
      </div>
      <div className='project-disclaimer-bar'>
        <div className='project-disclaimer-item'>
          Kickstarter connects creators with backers to fund projects.
        </div>
        <div className='project-disclaimer-item'>
          Rewards aren’t guaranteed, but creators must regularly update backers.
        </div>
        <div className='project-disclaimer-item'>
          You’re only charged if the project meets its funding goal by the campaign deadline.
        </div>
      </div>
      <div className='sticky border-top border-bottom bg-white t0' style={{zIndex: '1'}}>
        <div className='grid-container'>
          <div className='grid-row'>
            <div className='inline-b width-8-12'>
              <NavLink to={`${url}/description`} className='mz3 project-nav-item font-size--14' activeClassName='active-project-nav-item'>
                Campaign
              </NavLink>
              <NavLink to={`${url}/faqs`} className='mz3 project-nav-item font-size--14' activeClassName='active-project-nav-item'>
                {`FAQ `}
                {faqs?.length > 0 && <span className='count'>{faqs?.length}</span>}
              </NavLink>
              <NavLink to={`${url}/updates`} className='mz3 project-nav-item font-size--14' activeClassName='active-project-nav-item'>
                {`Updates `}
                {updates?.length > 0 && <span className='count'>{updates?.length}</span>}
              </NavLink>
              <NavLink to={`${url}/comments`} className='mz3 project-nav-item font-size--14' activeClassName='active-project-nav-item'>
                {`Comments `}
                {comments?.length > 0 && <span className='count'>{comments?.length}</span>}
              </NavLink>
            </div>
            <div className='inline-b' style={{width: '30%'}}>
              <button className='btn btn-medium btn-primary' onClick={() => {user ? setShow(true) : history.push('/login')}}>
                Back this project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='project-sub-page-container'>
        <Route path={`${path}/description`}>
          <Campaign campaign={campaign} />
        </Route>
        <Route path={`${path}/faqs`}>
          <FAQsection faqs={faqs} />
        </Route>
        <Route path={`${path}/updates`} exact>
          <UpdatesSection updates={updates} />
        </Route>
        <Route path={`${path}/updates/:updateId`}>
          <UpdatePage />
        </Route>
        <Route path={`${path}/comments`}>
          {comments ?
            <CommentsSection comments={comments} project_id={id} />
            : 'no comments'}
        </Route >
      </div>

    </div >
  )
}

export default ProjectPage;
