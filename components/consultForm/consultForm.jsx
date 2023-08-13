/** @format */

export default function ConsultationForm(style) {
    return (
      <form class="space-y-4" style={style}>
        <div class="flex space-x-4 ">
          <div class="w-1/2">
            <label for="firstName">First Name<span class="required">*</span></label>
            <input type="text" id="firstName" placeholder="First Name" class="w-full p-2 border" />
          </div>
          <div class="w-1/2">
            <label for="lastName">Last Name<span class="required">*</span></label>
            <input type="text" id="lastName" placeholder="Last Name" class="w-full p-2 border" />
          </div>
        </div>
  
        <div class="flex space-x-4">
          <div class="w-1/2">
            <label for="email">Email<span class="required">*</span></label>
            <input type="email" id="email" placeholder="Email" class="w-full p-2 border" />
          </div>
          <div class="w-1/2">
            <label for="destination">Preferred Destination<span class="required">*</span></label>
            <select id="destination" class="w-full p-2 border">
              <option value="destination1">Destination 1</option>
              <option value="destination2">Destination 2</option>
            </select>
          </div>
        </div>
  
        <div class="flex space-x-4">
          <div class="w-1/3">
            <label for="country">Country</label>
            <select id="country" class="w-full p-2 border">
              <option selected value="Germany">
                Germany (Deutschland)
              </option>
              <option value="country2">Country 2</option>
            </select>
          </div>
          <div class="w-2/3">
            <label for="phoneNumber">Phone Number</label>
            <input type="number" id="phoneNumber" placeholder="Phone Number" class="w-full p-2 border" />
          </div>
        </div>
  
        <div class="flex space-x-4">
          <div class="w-1/2">
            <label for="treatmentCategory">Treatment Categories<span class="required">*</span></label>
            <select id="treatmentCategory" class="w-full p-2 border">
              <option value="surgeryType1">Surgery Type 1</option>
              <option value="surgeryType2">Surgery Type 2</option>
            </select>
          </div>
          <div class="w-1/2">
            <label for="procedure">Procedure<span class="required">*</span></label>
            <select id="procedure" class="w-full p-2 border">
              <option value="procedure1">Procedure 1</option>
              <option value="procedure2">Procedure 2</option>
            </select>
          </div>
        </div>
  
        <label for="textInput"></label>
<input type="text" id="textInput" placeholder="Please add any additional information for our team here" className="w-full p-2 border h-56 text-center" />

  
        <div>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox" />
            <span class="ml-2">
              I agree to receive other communication for PHOENIQUELIFE and accept
              terms of use and privacy policy
            </span>
          </label>
        </div>
  
        
            <button
              className="bg-gray-300 opacity-60 text-black font-bold py-2 px-4 rounded whitespace-nowrap h-16 shadow-lg hover:shadow-xl transition-all my-8 w-64 hover:text-white mb-32"
              style={{ borderRadius: "4px" }}
            >
              SUBMIT
            </button>
    
     </form>
   
    );
  }
  