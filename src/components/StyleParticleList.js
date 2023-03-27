import styled from "styled-components";




export const Container = styled.div`
  background-color: ${({ grade, theme }) => 
  (grade === '1'? theme.palette.blue : 
  (grade === '2'? theme.palette.yellow :
  (grade === '3'? theme.palette.orange :
  (grade === '4'? theme.palette.red : 
  (grade === '5'? theme.palette.dark : theme.palette.grey ))) ))};

`
export const Title = styled.p`
 font-family: 'GmarketSansMedium';
`
export const SubTitle = styled.p`
 font-family: 'OTEnjoystoriesBA';
`
export const Icon = styled.p`
width: 30px;

  
`