import React from 'react'

export default function NotFound() {
  return (
    <>
    <section className="notfound">
      <div className="container d-flex flex-column justify-content-center align-items-center">
      <FontAwesomeIcon icon="fa-sharp fa-solid fa-circle-exclamation" bounce size="2xl" style={{color: "#74C0FC",}} />
      <h2>not-found works!</h2>
      </div>
    </section>
    </>
  )
}
