<div class="full-screen-container-signup">
  <div class="signup-form">
    <h3 class="form-title">Become a Bookwormer!</h3>
    <img
      id="big_logo"
      src="/images/bookworms_logo_big.png"
      alt="bookworms logo"
    />
    <h4 class="form-text">
      A place to keep track of the books you read and to see what others are
      reading.
    </h4>
    <form action="/signup" method="POST">
      <div class="input-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Butz8er"
          required
        />
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="seymour_butz@bookworms.com"
          required
        />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="********"
          required
        />
      </div>
      <button type="submit" class="form-btn">Become a Member</button>
    </form>
    <div class="error-message">
      <% if (typeof errorMessage !== 'undefined') {%>
      <p><%= errorMessage%></p>
      <%} %>
    </div>
  </div>
</div>