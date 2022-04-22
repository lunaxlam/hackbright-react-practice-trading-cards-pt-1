'use strict';

const tradingCardData = [
  {
    name: "Balloonicorn",
    skill: "video games",
    imgUrl: "/static/img/balloonicorn.jpg",
    cardId: 1,
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name: "Off-By-One",
    skill: "climbing mountains",
    imgUrl: "/static/img/off-by-one.jpeg",
    cardId: 4,
  },
  {
    name: "Seed.py",
    skill: "making curry dishes",
    imgUrl: "/static/img/seedpy.jpeg",
    cardId: 5,
  },
  {
    name: "Polymorphism",
    skill: "costumes",
    imgUrl: "/static/img/polymorphism.jpeg",
    cardId: 6,
  },
  {
    name: "Short Stack Overflow",
    skill: "ocean animal trivia",
    imgUrl: "/static/img/shortstack-overflow.jpeg",
    cardId: 7,
  },
  {
    name: "Merge",
    skill: "bullet journaling",
    imgUrl: "/static/img/merge.png",
    cardId: 8,
  },
];


// A React Component can be reused! 
// Properties for the TradingCard component are: name, imgUrl, and skill
// the TradingCard component will render one trading card
function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill:{props.skill}</h2>
    </div>
  );
}


// // Each TradingCard is mounted in the DOM through the ReactDOM.render() call
// //

// ReactDOM.render(
//   <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
//   document.querySelector('#balloonicorn'),
// );

// ReactDOM.render(
//   <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
//   document.querySelector('#float'),
// );

// ReactDOM.render(
//   <TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
//   document.querySelector('#llambda'),
// );

// // Add two more trading cards to the cards page
// ReactDOM.render(
//   <TradingCard name="off-by-one" skill="filtering bad apples" imgUrl="/static/img/off-by-one.jpeg" />,
//   document.querySelector('#off-by-one'),
// );

// ReactDOM.render(
//   <TradingCard name="polymorphism" skill="shape-shifting" imgUrl="/static/img/polymorphism.jpeg" />,
//   document.querySelector('#polymorphism'),
// );


// A new React component 
// the TradingCardContainer component loops over each data point and makes a trading card component then returns the cards
function TradingCardContainer () {
  const tradingCards = [];

  // Use { } to tell JSX to evaluate a word or expression/get the value

  for (const currentCard of tradingCardData) {
    tradingCards.push(
      <TradingCard  // We are referring to the TradingCard component on ln 58; this instantiates a TradingCard component for each currentCard
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  }

  return (
    <React.Fragment>
      {tradingCards}
  </React.Fragment>
  );
}

// Mount just one thing to the page
ReactDOM.render(<TradingCardContainer />, document.querySelector('#all-cards'));