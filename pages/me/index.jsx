import React from 'react'
import Layout from '../../components/Layout'
import Icon from '../../components/Icon'
import Image from 'next/image'

export default function Me(){

    return (
        <Layout seoInfo={{title: 'About | Chris LaRocque', description: "I'm a web developer based near Boston with experience building React and Vue framework based apps based around marketing orgs and user first design."}}>
          <div className="columns is-centered is-vcentered p-6">
    <div className="column is-one-third">
      <div className="content">
        <h1>About me</h1>
        <p>
          I&apos;m a web developer based near Boston, MA with ~7 years experience
          building content oriented, user-first web applications.
        </p>
        <div className="buttons">
          <a
            href="mailto:larocque.christopher@gmail.com"
            className="button is-black"
            ><Icon name="Envelope" />&nbsp;<span
              style={{display: 'block'}}
              className="ml-1"
              >Email</span></a>
          <a href="https://github.com/ChrisLaRocque" className="button is-black"
            ><Icon name="Github" />&nbsp;<span
              style={{display: 'block'}}
              className="ml-1"
              >Github</span></a>
        </div>
      </div>
    </div>
    <div className="column is-one-third">
      <figure className="image">
        <Image
        src="https://www.larocque.dev/headshot.jpeg"
        alt="Chris LaRocque headshot"
        className="is-rounded" 
        width={500}
        height={500}
      />
      </figure>
    </div>
  </div>
  </Layout>
    )
}