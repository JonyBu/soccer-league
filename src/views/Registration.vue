<template>
  <b-card class="mt-3">
    <h1>REGISTRATION FORM</h1>
    <div class="caja-flex">
      <section class="noticias">
        <form action="show_data.html" method="GET">
          <p>
            <input
              type="text"
              placeholder="Player’s First Name"
              name="first_name"
              class="width-50"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              class="width-50"
              required
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Street Address"
              name="street_address"
              class="width-100"
              required
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="City"
              name="city"
              class="width-50"
              required
            />
            <input
              type="text"
              placeholder="Zip Code"
              name="zip_code"
              class="width-50"
              required
            />
          </p>
          <p>
            Birth Date:
            <input
              type="date"
              placeholder="Birth Date(mm/dd/yyyy)"
              name="birth_date"
              class="date"
              required
            />
          </p>
          <p class="gender">
            Gender:
            <input type="radio" name="gender" value="male" checked /> Male
            <input type="radio" name="gender" value="female" /> Female
            <input type="radio" name="gender" value="other" /> Other
          </p>
          <p class="grade">
            Grade:
            <input type="radio" name="grade" value="Pre-School" />Pre-School
            <input type="radio" name="grade" value="1st" />1st
            <input type="radio" name="grade" value="2st" />2st
            <input type="radio" name="grade" value="3st" />3st
            <input type="radio" name="grade" value="4st" />4st
          </p>
          <h3>Which elementary school do you live near?</h3>
          <h4>Closest School:</h4>
          <p>
            <input
              type="checkbox"
              name="closest_school"
              value="AJ Katzenmaier"
            />AJ Katzenmaier
            <input
              type="checkbox"
              name="closest_school"
              value="Marjorie P Hart"
            />Marjorie P Hart
            <input
              type="checkbox"
              name="closest_school"
              value="Greenbay"
            />Greenbay
          </p>
          <p>
            <input
              type="checkbox"
              name="closest_school"
              value="North Elementary"
            />North Elementary
            <input
              type="checkbox"
              name="closest_school"
              value="Howard A Yeager"
            />Howard A Yeager
            <input
              type="checkbox"
              name="closest_school"
              value="South Elementary"
            />South Elementary
          </p>
          <h4>What position(s) do you normally play? (check all that apply)</h4>
          <p>
            <input type="radio" name="position" value="Forward" />Forward
            <input type="radio" name="position" value="Midfield" />Midfield
            <input type="radio" name="position" value="Defense" />Defense
            <input type="radio" name="position" value="Goalkeeper" />Goalkeeper
          </p>
          <h4>Uniform Size:</h4>
          <p>
            <input type="radio" name="uniform" value="Youth Smal" />Youth Small
            <input type="radio" name="uniform" value="Small" />Small
            <input type="radio" name="uniform" value="Youth Medium" />Youth
            Medium <input type="radio" name="uniform" value="Medium" />Medium
            <input type="radio" name="uniform" value="Youth Large" />Youth Large
            <input type="radio" name="uniform" value="Large" />Large
            <input type="radio" name="uniform" value="Extra-Large" />Extra-Large
          </p>
          <section class="permission">
            <h4>Permission to Play</h4>
            <p>
              I, the parent or guardian of the minor registrant, agree that the
              registrant and I will abide by all the rules of the Northside
              Youth Soccer League (NYSL). In recognizing the possibility of
              physical injury associated with soccer and in consideration for
              the “League” accepting the registrant for its soccer programs and
              activities, I hereby release, discharge, and/or otherwise
              indemnify NYSL, their employees and associated personnel and
              volunteers,including the facilities used for practices and games,
              against any claim by or on behalf of the registrant as a result of
              the registrant’s participation in the programand/orbeing
              transported to or from NYSL sponsored activities,which
              transportation
            </p>
            <p>
              By signing below, I herebyagree andauthorizethe above.In addition,
              by signing below, Ialso acknowledge that I have read the
              cancellation policy and agree to its terms.
            </p>
            <p>
              Parent/GuardianSignature:
              <input
                type="text"
                name="parent"
                placeholder="Name guardian"
                class="width-50"
                required
              />
            </p>
            <p>
              Date:
              <input type="date" class="date" required />
            </p>
            <p>
              I agree:
              <input type="checkbox" name="agree" value="agree" required />
            </p>
          </section>
          <input type="submit" name="Submit" value="Submit" />
        </form>
      </section>
    </div>
  </b-card>
</template>