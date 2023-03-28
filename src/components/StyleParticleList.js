import styled from "styled-components";




export const Container = styled.div`
 ${({ theme }) => theme.common.flexCenter};
  background-color: ${({ grade, theme }) => 
  (grade === '1'? theme.palette.blue : 
  (grade === '2'? theme.palette.yellow :
  (grade === '3'? theme.palette.orange :
  (grade === '4'? theme.palette.red : 
  (grade === '5'? theme.palette.dark : theme.palette.grey ))) ))};

`
export const Title = styled.span`
 font-family: 'GmarketSansMedium';
 font-size:${({ theme }) => theme.fontSizes.title};
`
export const SubTitle = styled.span`
 font-family: 'OTEnjoystoriesBA';
 font-size:${({ theme }) => theme.fontSizes.subtitle};

`
export const Grade = styled.span`
 font-family: 'OTEnjoystoriesBA';
 font-size:${({ theme }) => theme.fontSizes.grade};
`
export const Icon = styled.span`
width: 30px;
`