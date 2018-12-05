window.onload = function val(){
var form = document.postElementsByClassName("form-inline");
var firstname = document.postElementById("firstname");
var lastname = document.postElementById('lastname');
var password = document.postElementById("password");
var telNum = document.postElementById("telNum");
var email = document.postElementById("email");
var sub = document.postElementById("sub");

		
		validate();
		
		
		
			
			
			

			function validate(){
				
					
					sub.onclick = function(){
						clearErrors();
						
						if(firstname.value.trim().length == 0){
						displayErrorMessage(firstname, "Firstname field empty");
					}
					
				

					if(lastname.value.trim().length == 0){
						displayErrorMessage(lastname, "Lastname field empty");
					}


					





					if(!validPassword(password.value)){
						
						
						password.value = '';
						displayErrorMessage(password, 'Password must contain atleast 1 uppercase letter, 1 lowercase letter, 1 number, and atleast 8 characters');
						
						
						
						
						
					}
					
					if(validPassword(password.value)){
						mySubmit(password);
					}

					


					if(telNum.value.trim().length == 0 || !validTel(telNum.value.trim())){
						telNum. value = '';
						displayErrorMessage(telNum,"Empty telephone field OR Invalid number");
					}

					


					if(!validEmail(email.value)){
						
						email.value = '';
						displayErrorMessage(email, "Invalid EMAIL");
					
						
						
					}
					};

					
			
			
					
					


				};	



				function validTel(num){
					return /^\d{3}\d{3}\d{4}$/.test(num);
				}

				function validPassword(pword){
					return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pword);
				}

				function validEmail(email){
					return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(email);
				}


				function insertAfter(element, newNode) {
				  element.parentNode.insertBefore(newNode, this.nextSibling);
				}

			
				function clearErrors() {
				  var elementsWithErrors = document.querySelectorAll('.error');
				  
				  for (var x = 0; x < elementsWithErrors.length; x++) {
				    elementsWithErrors[x].setAttribute('class', '');
				    elementsWithErrors[x].parentNode.removeChild(elementsWithErrors[x].nextElementSibling);
				   
				  }

				}

				
				function displayErrorMessage(formField, message) {
				  formField.setAttribute('class', 'error');
				  var errorMessageText = document.createTextNode(message);
				  var errorMessage = document.createElement('span');
				  errorMessage.setAttribute('class', 'error-message');
				  errorMessage.appendChild(errorMessageText);
				  
				  insertAfter(formField, errorMessage);
				}
				
				function mySubmit(obj) {
				  
				  var hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
				  hashObj.update(obj.value);
				  var hash = hashObj.getHash("HEX");
				  obj.value = hash;
				}




};		


			
		