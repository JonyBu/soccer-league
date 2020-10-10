<template>
  <b-card class="mt-3">
    <h3>REGISTRATION PLAYER'S FORM</h3>
    <hr />
    <b-form class="mt-4">
      <b-row>
        <b-col md="4">
          <b-form-group
            id="f_name_group"
            label="First Name:"
            label-for="f_name"
            description=""
          >
            <b-form-input
              id="f_name"
              type="text"
              v-model="form.first_name"
              required
              placeholder="Enter player's first name"
            >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group
            id="l_name_group"
            label="Last Name:"
            label-for="l_name"
            description=""
          >
            <b-form-input
              id="l_name"
              v-model="form.last_name"
              type="text"
              required
              placeholder="Enter player's last name"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group
            id="address_group"
            label="Address:"
            label-for="Address"
            description=""
          >
            <b-form-input
              id="Address"
              v-model="form.address"
              type="text"
              required
              placeholder="Enter address"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            id="city_group"
            label="City:"
            label-for="city"
            description=""
          >
            <b-form-input
              id="City"
              v-model="form.city"
              type="text"
              required
              placeholder="Enter city name"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="2">
          <b-form-group
            id="zip_group"
            label="Zip code:"
            label-for="zip"
            description=""
          >
            <b-form-input
              id="zip"
              v-model="form.zip"
              type="text"
              placeholder="Enter zip code"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group
            id="birthday"
            label="Birth Date:"
            label-for="date"
            description=""
          >
            <b-form-datepicker id="brith_date" v-model="form.br_date">
            </b-form-datepicker>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group label="Gender:">
            <b-form-radio-group
              id="btn-radios-1"
              v-model="form.gender"
              :options="option.gender"
              buttons
              button-variant="outline-dark"
              size="md"
              name="radio-btn-outline"
            ></b-form-radio-group>
          </b-form-group>

          <b-form-group label="Grade:">
            <b-form-radio-group
              id="btn-radios-2"
              v-model="form.grade"
              :options="option.grade"
              buttons
              button-variant="outline-dark"
              size="md"
              name="radio-btn-outline"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <hr />
      <h4>Which elementary school do you live near?</h4>
      <h5>Closest School:</h5>
      <b-form-group>
        <b-form-checkbox-group
          v-model="form.closest"
          :options="option.closest"
          switches
        ></b-form-checkbox-group>
      </b-form-group>

      <h5>What position(s) do you normally play? (check all that apply)</h5>

      <b-form-group label="Position:">
        <b-form-radio-group
          id="btn-radios-3"
          v-model="form.position"
          :options="option.position"
          buttons
          button-variant="outline-dark"
          size="md"
          name="radio-btn-outline"
        ></b-form-radio-group>
      </b-form-group>

      <b-form-group label="Uniform Size:">
        <b-form-radio-group
          id="btn-radios-4"
          v-model="form.uniform"
          :options="option.uniform"
          buttons
          button-variant="outline-dark"
          size="md"
          name="radio-btn-outline"
        ></b-form-radio-group>
      </b-form-group>

      <b-card>
        <h4>Permission to Play</h4>
        <p>
          I, the parent or guardian of the minor registrant, agree that the
          registrant and I will abide by all the rules of the Northside Youth
          Soccer League (NYSL). In recognizing the possibility of physical
          injury associated with soccer and in consideration for the “League”
          accepting the registrant for its soccer programs and activities, I
          hereby release, discharge, and/or otherwise indemnify NYSL, their
          employees and associated personnel and volunteers,including the
          facilities used for practices and games, against any claim by or on
          behalf of the registrant as a result of the registrant’s participation
          in the programand/orbeing transported to or from NYSL sponsored
          activities,which transportation
        </p>
        <p>
          By signing below, I herebyagree andauthorizethe above.In addition, by
          signing below, Ialso acknowledge that I have read the cancellation
          policy and agree to its terms.
        </p>

        <p>Current date:</p>

        <b-input-group prepend="Name guardian" class="mb-3">
          <b-form-input
            aria-label="Name guardian"
            required
            v-model="form.guardian_name"
          ></b-form-input>
        </b-input-group>

        <b-form-checkbox
          id="status"
          v-model="form.status"
          name="status"
          value="accepted"
          unchecked-value="not_accepted"
          size="lg"
          required
        >
          I accept the terms and use
        </b-form-checkbox>
      </b-card>

      <b-container class="mt-4">
        <b-button type="submit" variant="primary" class="mr-4">Submit</b-button>
        <b-button type="reset" variant="danger" >Reset</b-button>
      </b-container>
    </b-form>

    <b-card class="mt-3" header="Form Data Result" hidden>
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </b-card>
</template>

<script>
export default {
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const myDate = new Date(today);
    return {
      form: {
        first_name: "",
        last_name: "",
        address: "",
        city: "",
        zip: "",
        br_date: "",
        gender: "",
        grade: "",
        closest: [],
        position: "",
        uniform: "",
        date: myDate,
        guardian_name: "",
        status: "not_accepted",
      },
      option: {
        gender: [
          { text: "Male", value: "Male" },
          { text: "Femmale", value: "Femmale" },
        ],
        grade: [
          { text: "Pre-school", value: "Pre-school" },
          { text: "1st", value: "1 Stage" },
          { text: "2st", value: "2 Stage" },
          { text: "3st", value: "3 Stage" },
          { text: "4st", value: "4 Stage" },
        ],
        closest: [
          { text: "AJ Katzenmaier", value: "AJ Katzenmaier" },
          { text: "Marjorie P. Hart", value: "Marjorie P. Hart" },
          { text: "Greenbay", value: "Greenbay" },
          { text: "North Elementary", value: "North Elementary" },
          { text: "Howard A Yeager", value: "Howard A Yeager" },
          { text: "South Elementary", value: "South Elementary" },
        ],
        position: [
          { text: "Goalkeeper", value: "Goalkeeper" },
          { text: "Defense", value: "Defense" },
          { text: "Midfield", value: "Midfield" },
          { text: "Forward", value: "Forward" },
        ],
        uniform: [
          { text: "Youth Small", value: "Youth Small" },
          { text: "Small", value: "Small" },
          { text: "Youth Medium", value: "Youth Medium" },
          { text: "Medium", value: "Medium" },
          { text: "Youth Large", value: "Youth Large" },
          { text: "Large", value: "Large" },
          { text: "Extra Large", value: "Extra Large" },
        ],
      },
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.first_name = "";
      this.form.last_name = "";
      this.form.address = "";
      this.form.city = "";
      this.form.zip = "";
      this.form.br_date = "";
      this.form.gender = "";
      this.form.grade = "";
      this.form.closest = [];
      this.form.uniform = "";
      this.form.uniform = "";
    },
  },
};
</script>