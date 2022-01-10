import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SplashNav from './SplashNav';
import Footer from '../Footer';
import * as projectAction from '../../store/project';
import RecommendedProject from './RecommendedProject';
import './SplashPageComponent.css'


export default function SplashPageComponent() {
    const [loaded, setLoaded] = useState(false);
    const randomProjects = useSelector(state => state.project);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
             await dispatch(projectAction.getRandomProjects());
            setLoaded(true);
          })();
        return () => {
            dispatch(projectAction.clear_project());
        }
    }, [dispatch])

    if (!loaded) {
        return null;
    }

    return (
			<>
				<SplashNav />
				<div className='border-bottom-gray'>
						<div className='grid-container'>
								<div className='splash-content'>
										<div className='splash-spacer-left'>
												<div className='splash-section'>
														<h3 className='splash-main-project'>Featured Project</h3>
														<NavLink className='splash-image-link' to={`/projects/${randomProjects[0]?.id}/comments`}>
																<img className='splash-main-image' src={`${randomProjects[0]?.image_src}`} alt='main featured project'/>
																<div className='splash-main-progress-bar' >
																	<div className='splash-main-progress' style={{ width: `clamp(0%, ${(randomProjects[0]?.current_funding / randomProjects[0]?.pledge_goal) * 100}%, 100%)` }} />
																</div>
																<h3 className='splash-image-header'>{`${randomProjects[0]?.title}`}</h3>
																<p className='splash-image-description'>{`${randomProjects[0]?.description}`}</p>
																<span className='splash-image-author'>By {`${randomProjects[0]?.username}`}</span>
														</NavLink>
												</div>
										</div>
										<div className='splash-spacer-right'>
												<h3 className='splash-main-project'>Recommended for you</h3>
												<ul className='splash-recommended-projects'>
														<RecommendedProject project={randomProjects[1]} />
														<RecommendedProject project={randomProjects[2]} />
														<RecommendedProject project={randomProjects[3]} />
												</ul>
										</div>
								</div>
						</div>
				</div>
				<Footer />
			</>
    )
}
