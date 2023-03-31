const colors = ["#CC6464", "#CC9B64", "#C9CC64", "#9ACC64", "#64CC7F", "#64CCC1", "#64B4CC", "#647CCC", "#7F64CC", "# BC64CC", "#CC6464"];

const Allquotes = { "Dalai Lama": "The purpose of our lives is to be happy.", "John Lennon": "Life is what happens when you're busy making other plans.", "Stephen King": "Get busy living or get busy dying.", "Mae West": "You only live once, but if you do it right, once is enough.", "Albert Einstein": "If you want to live a happy life, tie it to a goal, not to people or things." };

const randomNum = Math.floor(Math.random() * colors.length);

class QuoteBox extends React.Component {
  constructor(props)
  {
    super(props);
    const counter = Math.floor(Math.random() * 5);
    this.state = {
      quotes: Allquotes,
      author: Object.keys(Allquotes)[counter],
      quote: Object.values(Allquotes)[counter],
      color: colors[counter] };

    this.ChangeQuote = this.ChangeQuote.bind(this);
    //this.ChangeBG=this.ChangeBG.bind(this);
  }


  ChangeQuote()
  {
    const counter = Math.floor(Math.random() * 5);
    this.setState({
      author: Object.keys(this.state.quotes)[counter],
      quote: Object.values(this.state.quotes)[counter],
      color: colors[counter] });


  }



  render() {
    return /*#__PURE__*/(

      React.createElement("div", { class: "back d-flex align-items-center justify-content-center", style: { backgroundColor: this.state.color } }, /*#__PURE__*/

      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { id: "text", class: "colorTheme" }, /*#__PURE__*/
      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-xs-1 col-xs-push-1 " }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-quote-left fa-2x", style: { color: this.state.color } })), /*#__PURE__*/


      React.createElement("div", { class: "col-xs-8 col-xs-push-1" }, /*#__PURE__*/
      React.createElement("p", { style: { color: this.state.color, fontSize: '22px', fontFamily: 'serif' } }, this.state.quote)))), /*#__PURE__*/




      React.createElement("div", { id: "author", class: "colorTheme" }, /*#__PURE__*/
      React.createElement("p", { style: { color: this.state.color } }, "- ", this.state.author)), /*#__PURE__*/

      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-xs-2 col-xs-push-1 " }, /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet", target: "_top" }, /*#__PURE__*/React.createElement("i", { class: "fab fa-twitter ", id: "twitter", style: { backgroundColor: this.state.color }, target: "_top" }))), /*#__PURE__*/



      React.createElement("div", { class: "col-xs-3 col-xs-push-7" }, /*#__PURE__*/
      React.createElement("button", { id: "new-quote", onClick: this.ChangeQuote, class: "btn", style: { backgroundColor: this.state.color } }, "new quote"))))));








  }}





ReactDOM.render( /*#__PURE__*/React.createElement(QuoteBox, null), document.getElementById('app'));

function ChangeBG()
{
  document.getElementsByClassName("back").style.backgroundColor = colors[randomNum];
  var textE = document.getElementsByClassName("colorTheme");
  textE[0].firstElementChild.style.color = colors[randomNum];
  textE[1].firstElementChild.style.color = colors[randomNum];
  document.getElementById("new-quote").style.backgroundColor = colors[randomNum];
  document.getElementById("twitter").style.backgroundColor = colors[randomNum];




}