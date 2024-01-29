export default function Contact()
{
    return(
        <>
        <div class="container">
        <div class="row">
            <div class="panel-group">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        My Contact Information:
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class = "container">
                            <li> <b>Email</b>: aMail@gmail.com</li>
                            <li> <b>Phone Number</b>: +1 123 4567890</li>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Send me a message:
                    </div>
                </div>
            </div>
        </div>
        </div>
        <br></br>
        <form id="ffp" action = "/">
		
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				<label htmlFor="myContact"> *Contact Number: </label>
				<input type="number" id="myContact" name="myContact" required="required" /> <br /> <br />

				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />

                <label htmlFor="myMessage"> *Your Message: </label>
                <br></br>
				<textarea id="myMessage" name="myMessage" rows="5" cols="33">
                Enter your message here...
                </textarea>
				<br></br>
				<input type="submit" className="submit" value="Submit"/> <br />
					
		
		</form> <br></br>
        </>
    );
}