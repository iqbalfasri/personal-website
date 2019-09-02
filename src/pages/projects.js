import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



const ProjectsPage = () => {
  const [repos, setRepos] = useState([])

  /**
   * Retrieve my all repositories
   */
  useEffect(() => {
    const URL_GH = 'https://api.github.com/users/iqbalfasri/repos'
    fetch(URL_GH)
      .then(res => res.json())
      .then(repos => setRepos(repos))
      .catch(error => console.error(error))
  }, [])

  /**
   * Mapping data
   */
  repos.map(r => console.log(r['name'], r['description']))

  return (
    <div>
      <h1>ProjectsPage</h1>
      <FontAwesomeIcon icon={faCoffee} />
    </div >
  )
}

export default ProjectsPage;