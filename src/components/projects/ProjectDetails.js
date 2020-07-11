import React from 'react'

const ProjectDetails = (props) => {
  console.log('props are:', props)
  const id = props.match.params.id;
  return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore corrupti similique sit perspiciatis minima nobis rem! Voluptatum, soluta. Quo atque, autem laborum dicta nobis a aperiam corporis sapiente natus doloribus.</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by The Net Ninja</div>
            <div>2nd Sept, 2am</div>
          </div>
        </div>
      </div>
  );
}

export default ProjectDetails
