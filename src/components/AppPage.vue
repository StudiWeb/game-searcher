<template>
    <div class="py-2 px-4 fadein animation-duration-1000">
        <div class="mb-6 text-7xl font-bold">{{title}}</div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>