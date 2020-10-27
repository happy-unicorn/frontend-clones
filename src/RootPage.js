import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pages from './pages.js';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  margin: 30px 20px 10px 20px;
  font-size: 30px;
  color: #c9c9cb;
`;
const CustomLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 300px;
  margin: 20px;
  padding: 0 50px;
  border: 5px solid #c9c9cb;
  border-radius: 10px;
  font-size: 18px;
  color: #c9c9cb;
  text-decoration: none;
  transition: border-color linear 100ms, color linear 100ms;
  
  &:hover {
    border-color: #6495ed;
    color: #6495ed;
  }
`;

const RootPage = () => {
    return (
        <Page>
            <Title>
                Frontend clones
            </Title>
            {
                pages.map(({slug, description, date}) => {
                    return (
                        <CustomLink to={slug}>
                            {description}
                        </CustomLink>

                    );
                })
            }
        </Page>
    );
};

export default RootPage;