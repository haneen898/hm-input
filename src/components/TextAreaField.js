

const TextAreaField = () => {
  return (
    <div className="cart-contenar">

    <form className="item">
    <label for="fname">Name:</label><br/>
    <input type="text" id="fname" name="fname"/><br/><br/>
    <label for="email">Email:</label><br/>
    <input type="email" id="email" name="email"/><br/><br/>
    <label for="fname">Massage:</label><br/>
    <textarea rows="4" cols="20" name="comment" form="usrform"></textarea><br/><br/>
  
    <button className="btn" type="submit" onclick="alert('Hello world!')">Submit</button>
   
     </form>
       
      </div>
  )
}

export default TextAreaField;