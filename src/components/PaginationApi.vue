<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="pagination__item">
        <a
          class="pagination__link"
          @click.prevent="$emit('get-pages', pagination.current_page - 1)"
          :class="{ disabled: !pagination.has_pre }"
        >
          <img
            v-if="pagination.has_pre"
            src="@/assets/images/prev_page.svg"

          />
          <img v-else src="@/assets/images/prev_page_disabled.svg"  />
        </a>
      </li>
      <li
        class="pagination__item"
        v-for="page in pagination.total_pages"
        :key="page"
      >
        <a
          class="pagination__link"
          :class="{
            active: pagination.current_page === page,
            disabled: pagination.total_pages <= 1,
          }"
          @click.prevent="$emit('get-pages', page)"
          >{{ page }}</a
        >
      </li>
      <li class="pagination__item">
        <a
          class="pagination__link"
          @click.prevent="$emit('get-pages', pagination.current_page + 1)"
          :class="{ disabled: !pagination.has_next }"
          ><img
            v-if="pagination.has_next"
            src="@/assets/images/next_page.svg"
           />
          <img v-else src="@/assets/images/next_page_disabled.svg"
        /></a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ['pagination', 'get-pages'],
  data () {
    return {}
  }
}
</script>
