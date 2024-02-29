export { PageShell }

import React, { useEffect } from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from 'vike/types'
import './scss/PageShell.scss'
import NavbarContent from './NavbarContent/NavbarContent'
import PageContent from './PageContent/PageContent'
import { FeedbackFish } from '@feedback-fish/react'

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
     
      <Layout>
          <Navbar>
           <NavbarContent/>
          </Navbar>

          <Content>{children}</Content>
          <FeedbackWidget/>
        </Layout>

     
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}

function FeedbackWidget() {
  return (<div className="feedback-widget">
   <FeedbackFish projectId='11d067c3552d93'>
    <button></button>
    </FeedbackFish>
  </div>
  )
}


function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="navbar">
      {children}
    </div>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <PageContent/>
    </div>
  )
}
