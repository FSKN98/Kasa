import React from 'react'
import { Link } from 'react-router-dom'
import "./ErrorPage.css"
export default function ErrorPage() {
  return (
      <div className='errorPageContainer'>
          <div className='errorContainer'>
              <div className='numberError'>
                  404
              </div>
              <h2>
                  Oups! La page que vous demandez n'existe pas.
              </h2>
              <Link to="/" className='linkError'>Retourner sur la page d’accueil</Link>
          </div>
    </div>
  )
}
