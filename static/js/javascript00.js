/* ========================================================================
 * Brian Raila 
 * Annunity Loan Calculator
 * https://github.com/brian-raila
 * ========================================================================
 * Copyrighted
 * ======================================================================== */

function calculatepv(period, salary_amnt, monthly_loan_rep) {
//Calculating the price value of a loan
	const interest = 0.15 ; //Fixed Interest Per Month 
	 // 	var monthly_loan_rep = parseFloat(monthly_loan_rep) || 0;
 	if (period > 12 || period <= 0) {
 		//Loan can only be issued for a maximum 12 months
 		//Can be issued for a minimum 0
 		return 0;
 	}
 	var payment = 0;
 	payment = (0.5 * salary_amnt) - monthly_loan_rep; 
	if (payment <= 0) { //2/3 Credit rule...

		return 0; //One cannot get a loan
	}

	var inp = parseFloat(Math.pow((1 + interest), (-1 * period)));
	var step1 = 1.0 - inp;
	var step2 = step1 / interest;

	return step2 * payment;

}



// var monthly_income = document.getElementById('monthly_income');
// var loan_period = document.getElementById('loan_period');
// var curr_loan_rep = document.getElementById('curr_loan_rep');


function button_click() {

	var monthly_income = 0;
	var loan_period = 0;
	var curr_loan_rep = 0;
	var the_x = 0.0;

	f_monthly_income = document.getElementById('monthly_income').value;
	f_loan_period = document.getElementById('loan_period').value;
	f_curr_loan_rep = document.getElementById('curr_loan_rep').value;


	monthly_income = parseFloat(f_monthly_income);
	loan_period = parseFloat(f_loan_period);
	curr_loan_rep = parseFloat(f_curr_loan_rep);

	// var the_x = calculatepv(6, 30000, 0);
	the_x = calculatepv(loan_period, monthly_income, curr_loan_rep);
	the_x = parseInt(the_x);
	var nego_fees = 0.03 * the_x;
	document.getElementById('breakdown').innerHTML = "Amount qualified for : KES " + "<b>" + the_x.toString() + "</b>" + "<br>" 
		+ "Negotiation fees : KES " + "<b>" + parseInt(nego_fees).toString() + "</b>"  ;
}


function validate_loan_period() {

		var period = parseFloat(document.getElementById('loan_period').value);
		if (period < 0.03 || period > 12) {

			document.getElementById('labeled') = document.getElementById('labeled') + "*Allows only between 1 and 12"

		}


}