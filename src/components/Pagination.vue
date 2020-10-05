<template>

        <ul class="pagination" v-if="pagination">
            <li class="prev" :class="{'disabled':!pagination.has_pre}">
                <a href="" @click.prevent="$emit('get-pages',pagination.current_page - 1)"><i class="fas fa-chevron-left"></i></a>
            </li>
            <li v-for="page in pagination.total_pages" :class="{'active':pagination.current_page===page}" :key="page">
                <a href="" @click.prevent="$emit('get-pages',page)">{{page}}</a>
            </li>
            <li class="next" :class="{'disabled':!pagination.has_next}">
                <a href="" @click.prevent="$emit('get-pages',pagination.current_page + 1)"><i class="fas fa-chevron-right"></i></a>
            </li>
        </ul>
        
  
</template>

<script>
export default {
    props:['pagination'],
    
}
</script>