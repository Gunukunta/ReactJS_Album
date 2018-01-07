import React from 'react';

const AlbumList = (props) =>{

    const showList = ({albumList})=>{
        if(albumList){
            return albumList.map((item,index)=>{
                return(
                    <img key={index} src='./images/albums/among_stars.jpg' alt="image"/>
                )
            })
        }
    }
    return(
        <div  className="album_list">
            {showList(props)}
        </div>
    )
}

export default AlbumList;