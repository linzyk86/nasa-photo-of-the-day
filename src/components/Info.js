import React from "react";
import styled from 'styled-components'



const Section = styled.section`
  margin: 0 auto;
`
const H1 = styled.h1`
  font-family: 'Inconsolata', monospace;
  font-size: 2.2em;
  padding-top: 20px;
  `

const Header = styled.header`
  padding: 25px 0 15px 0;
  margin: 0 auto;
  font-size: 1.8em;
  font-family: 'Inconsolata', monospace;
`
const Body = styled.body`
  font-family: 'Inconsolata', monospace;
  color: darkslategrey;

`
const Img = styled.img`
  width: 70%;
  margin: 0 auto;
`
const P = styled.p`
  font-size: 1.5em;
  font-family: 'Roboto', sans-serif;
  line-height: 1.9em;
  text-align: left;
  padding: 20px 40px 30px 40px;
  width: 70%;
  margin: 0 auto;
`

const Info = props =>{
    return(
      <Body>
        <Section className = "container">
            <Header>
              <h1>NASA Photo Of The Day for: {props.date}</h1>
            </Header>
            <Section>
                <Img src = {props.photo}></Img>
            </Section>
          
          <Section>
              <div>
                <H1>{props.title}</H1>
              </div>
            
              <P>{props.para}</P>
            </Section>
        </Section>
      </Body>
    );
};

export default Info;