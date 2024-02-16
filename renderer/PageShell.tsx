export { PageShell }

import React, { useEffect } from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from 'vike/types'
import './scss/PageShell.scss'
import NavbarContent from './NavbarContent/NavbarContent'
import PageContent from './PageContent/PageContent'

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {

  useEffect(() => {
    // Your scroll logic here
    // Example: Scroll to the top of the page
    if(pageContext.urlOriginal === "/contact"){
      window.scrollTo({ top: 1400, behavior: 'smooth' });
    }
 

    // You can also add different scroll animations here
    // Example: Using react-scroll library
    // scrollToElement('elementId', { duration: 500, smooth: 'easeInOutQuint' });
  }, [pageContext.urlOriginal]);

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Navbar>
           <NavbarContent/>
          </Navbar>
          <Content>{children}</Content>
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
