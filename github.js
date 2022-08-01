class Github {
  constructor() {
    // api key
    this.client_id = "fe26ff6802395ea62305";
    this.client_secret = "a46cf5fbd24249edb39582d247b02952a35afc80";
  }

  // get user itself
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id${this.client_id}&client_secret${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
