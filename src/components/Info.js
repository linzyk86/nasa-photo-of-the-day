import React from "react";
import styled from 'styled-components'



const Section = styled.section`
  margin: 0 auto;
`
const Header = styled.header`
  padding: 25px 0 15px 0;
  margin: 0 auto;
  font-size: 1.5em;
  font-family: 'Inconsolata', monospace;
`
const Body = styled.body`
  font-family: 'Inconsolata', monospace;
  color: darkslategrey;

`
const Img = styled.img`
  width: 100%;
`
const P = styled.p`
  font-family: 'Roboto', sans-serif;
  line-height: 1.9em;
  text-align: left;
  padding: 20px 40px 30px 40px;
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
          
            <div>
              <h1>{props.title}</h1>
            </div>
            <Section>
              <P>{props.para}</P>
            </Section>
        </Section>
      </Body>
    );
};

export default Info;