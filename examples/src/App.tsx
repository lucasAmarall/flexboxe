import flexboxe from '../../src/index';
import './App.css';
function App() {
  return (
    <div
      style={flexboxe()
        .background.color('rgba(255,255,255,.03)')
        .flex(1)
        // .minHeight('100vh')
        // .minWidth('100vw')
        .justifyContent.center()
        .alignItems.center()
        .border.radius.all(36)
        .build()}>
      <div
        style={flexboxe()
          .minHeight(200)
          .minWidth(200)
          .padding.all(20)
          .margin.all(80)
          // .border.radius.top.left(1)
          // .border.radius.top.right(2)
          // .border.radius.bottom.right(2)
          // .border.radius.bottom.left(2)
          .border.radius.all(20)
          // .border.color.top('#fff')
          // .border.color.left('#fff')
          // .border.color.right('#fff')
          // .border.color.bottom('#fff')
          .border.color.all('red')
          // .border.width.top(1)
          // .border.width.left(1)
          // .border.width.bottom(1)
          // .border.width.right(1)
          .border.width.all(1)
          .background.color('white')
          .background.image(
            'https://img.freepik.com/fotos-gratis/respingo-colorido-abstrato-3d-background-generativo-ai-background_60438-2509.jpg',
          )
          // .background.position.set('0% 50%')
          .background.position.center()
          .build()}>
        <h1
          style={flexboxe()
            .font.family('Arial')
            .font.size(80)
            .font.lineHeight('100%')
            .font.spacing(20)
            // .font.toLowerCase()
            .font.toUpperCase()
            .font.color('#FFF')
            .build()}>
          Testing
        </h1>
      </div>
    </div>
  );
}

export default App;
