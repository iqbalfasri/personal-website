import React, { useEffect, useState } from "react"
import axios from "axios"
import Layout from "../components/LayoutComponent"
import Seo from "../components/SeoComponent"
import {
  DisplayCardRepos,
  LoadMore,
  ProjectHeader as Header,
} from "../components/ProjectComponent"

const ProjectsPage = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [limitRepo, setlimitRepo] = useState(6)

  // Retrieve my all repositories
  useEffect(() => {
    const fetchRepos = async () => {
      const REPO_ENDPOINT = "https://api.github.com/users/iqbalfasri/repos"
      const fetch = await axios.get(REPO_ENDPOINT)
      const getRepos = fetch.data

      setRepos(getRepos)
      setLoading(false)
    }

    fetchRepos()
  }, [])

  // Limit data to display repository
  const reposLimit = repos.slice(0, limitRepo)

  // Handle button to load more data repository
  const handleLoadMore = () => {
    setlimitRepo(limitRepo + 3)
  }

  return (
    <Layout>
      <Seo title="Projects" />
      <Header>
        <h1>Project Page</h1>
      </Header>
      <div>
        <div className="container">
          <h3 className="mb-5" style={{ fontWeight: "700", fontSize: 32 }}>
            My github repositories
          </h3>
          <DisplayCardRepos state={{ repo: reposLimit, loading: loading }} />
          <LoadMore
            onClick={handleLoadMore}
            text="Load more"
            loading={loading.toString()}
          />
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
