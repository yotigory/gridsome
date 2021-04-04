<template>
  <div>
    <header class="mb-5">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">{{ $static.metadata.siteName }}</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-text><g-link class="nav-link" to="/about/">わたしについて</g-link></b-nav-text>
            <b-nav-text><g-link class="nav-link" to="/step/">Gridsomeについて</g-link></b-nav-text>
            <b-nav-text><g-link class="nav-link" to="/shopify/">Shopifyについて</g-link></b-nav-text>
            <b-nav-text><g-link class="nav-link" to="/blog/">Blog</g-link></b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

<main class="pb-5 container-xl">
    <slot/><!-- Page content will be inserted here -->
  </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
