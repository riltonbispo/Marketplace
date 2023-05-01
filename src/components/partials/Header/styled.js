import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: white;
  height: 60px;
  border-bottom: 1px solid #ccc;
  
  a {
    text-decoration: none;
  }

  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    flex: 1;
    
    height: 60px;
    font-size: 24px;
    font-weight: bold;
  }

  nav {
    padding-top: 10px;
    padding-bottom: 10px; 

    ul {
      display: flex;
      align-items: center;
      height: 40px;
      gap: 40px;

      li {
        a {
          color: black;
          font-size: 14px;

          &:hover {
            color: #777;
          }

          &.button {
            background-color: #ff8100;
            border-radius: 4px;
            color: white;
            padding: 5px 10px;

            &:hover {
              background-color: #e57706;
            }
          }
        }
      }
    }
  }
`