import MytodoHeader from './MyTodoHeader'
import MytodoLeftLayout from './MyTodoLeftLayout'
import MytodoRightLayout from './MyTodoRightLayout'
import styled from 'styled-components';


function MyTodoLayout(){
  
    return(
        <Container>
            <Head>
                {/* head 영역 */}
                <MytodoHeader/>
            </Head>
            <Body>
              <LeftPane>
                  {/* 왼쪽 영역 */}
                  <MytodoLeftLayout/>
              </LeftPane>            
              <RightPane>
                  {/* 오른쪽 영역 */}
                  <MytodoRightLayout/>
              </RightPane>
            </Body>  
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Head = styled.div`

  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  margin: 20px;
`;
const Body = styled.div`
  
  display: flex;
  flex-direction: row;
  flex: 1;
`;
const LeftPane = styled.div`

  background-color: #99ccffbd;
  flex: 1;
  border-radius: 20px;
  
`;
const RightPane = styled.div`
  flex: 1;
  background: #e9ecef;
  border-radius: 20px;
  
`;
export default MyTodoLayout;