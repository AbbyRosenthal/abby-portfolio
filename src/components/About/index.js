import React from 'react';

function About() {
  return (
    <section>
      <h1 id="about">Who am I?</h1>
      <p> Currently a 6th grade teacher learning Computer Science through the University of Minnesota Coding Bootcamp!</p>
      <img src={require(`../../assets/headshot.jpeg`)} />
    </section>
  );
}

export default About;