import React from 'react';
import { Link } from "react-router-dom";
import './Item.css'
import image from './image1.png';
import ImageGallery from './ImageGallery';
import SourceMaterialView from './SourceMaterialView';
import Paper from '../../common/Paper';
function Item() {
    return (
        <div id='container'>
            <Paper>
                <div id='images-container'>
                    <div id='image-sidebar-container'>
                        <span className='header'>Coat #123 Experiment</span>
                        <div className='horizontal-divider'></div>
                        <Link to="designer">Designer Profile</Link>
                        <p><span><b className='box'>Date:</b> 1999</span></p>
                        <p><span><b className='box'>Material:</b> cotton</span></p>
                        <p><span><b className='box'>Country:</b> US</span></p>
                        <p><span><b className='box'>Status:</b> <span>Designer Collection</span></span></p>
                        <p><span><b className='box'>Description: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
                        <div className='horizontal-divider'></div>
                    </div>
                    <div id='divider'></div>
                    <div id='right-side-container'>    
                        <div id='large-image-container'>
                            <ImageGallery imageNames={[image]}/>
                        </div>
                        <SourceMaterialView/>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default Item;