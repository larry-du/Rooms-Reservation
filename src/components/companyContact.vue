<template>
  <div class="company-contact">
    <div class="log">
      <a href="##" class="logo_body">White space</a>
    </div>
    <div class="contact">
      <div class="social_media">
        <a href="##" class="social_contact">
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            fixed-width
            size="lg"
          />
        </a>
        <a href="##" class="social_contact">
          <font-awesome-icon
            :icon="['fab', 'facebook-square']"
            fixed-width
            size="lg"
          />
        </a>
      </div>
      <div class="contact_us">
        <div class="telephone">
          <font-awesome-icon
            :icon="['fas', 'phone-alt']"
            fixed-width
            size="lg"
          />
          <span>02-17264937</span>
        </div>
        <div class="mail">
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            fixed-width
            size="lg"
          />
          <a href="##">whitespace@whitespace.com.tw</a>
        </div>
        <div class="adress">
          <font-awesome-icon :icon="['fas', 'home']" fixed-width size="lg" />
          <span>台北市羅斯福路十段30號</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "companyContact",
  props: {
    allRooms: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.log {
  width: 148px;
  height: 148px;
  margin: 0 auto;
  background-color: $gray-100;
  display: flex;
  justify-content: center;
  align-items: center;
  & a:hover {
    color: $white;
  }
}
.logo_body {
  text-align: center;
  font-size: $logo-title-size;
  font-family: $title-font-family;
  &:hover {
    text-decoration: none;
  }
}

.contact {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white;
  font-size: $product-title-size;
  & .social_media {
    font-size: 0;
  }
  & .social_media a + a {
    margin-left: 13px;
  }

  & .social_contact {
    display: inline-block;
  }
  & .social_contact {
    font-size: 21px;
    color: $white;
    &:hover {
      color: red;
    }
    & svg {
      vertical-align: middle;
    }
    & svg + svg {
      margin-left: 13px;
    }
  }
  & .contact_us {
    border-left: 1px solid white;
    margin-left: 31px;
    padding-left: 31px;
    div + div {
      margin-top: 13px;
    }
    & .mail a:hover {
      color: red;
    }
  }
}
</style>
