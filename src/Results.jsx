import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
`

const Primary = styled.span`
  font-size: 3.25rem;
  line-height: 70px;
  font-weight: 700;
  color: hsl(259, 100%, 65%);


  @media (min-width: 1440px) {
    font-size: 6.5rem;
    line-height: 125px;
  }
`

const Secondary = styled(Primary)`
  color: black;
`

const Results = () => {
    return (
        <>
            <Container>
                <div>
                    <Primary>41</Primary>
                    <Secondary> years</Secondary>
                </div>
                <div>
                    <Primary>4</Primary>
                    <Secondary> years</Secondary>
                </div>
                <div>
                    <Primary>20</Primary>
                    <Secondary> days</Secondary>
                </div>
            </Container>
        </>

    );
};

export default Results;