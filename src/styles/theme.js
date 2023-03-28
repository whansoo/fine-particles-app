const palette = {
    blue: '#0080ff',
    yellow: '#F9F9C5',
    green: '#D9F8C4',
    orange: '#FAD9A1',
    red: '#F37878',
    dark: '#a9a9a9',
    grey: '#d3d3d3'
}
const common = {
    flexCenter: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      height: 200px;
      margin-bottom: 30px;
    `,
    flexAround: `
      display: flex;
      align-items: center;
      justify-content: space-around;
    `,
    flexColumnStart: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      position: fixed;
      right: 0;
      left: 0;
      top: 50px;
      bottom: 0;
    `,
}

const fontSizes = {
    title: '1rem',
    subtitle: '1.3rem',
    paragraph: '1rem',
    grade:'50px',
}

const theme = {
    palette,
    common,
    fontSizes,
}

export default theme