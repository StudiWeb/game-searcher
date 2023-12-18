<template>
    <Card>
        <template #header>
            <img :alt="title" :src="imageUrl" class="w-18rem"/>
        </template>
        <template #title> {{title}} </template>
        <template #subtitle> {{releaseDate}} </template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
        <template #footer>
            <Button icon="pi pi-check" label="Save" />
            <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
        </template>
    </Card>
</template>

<script>
export default {
    props: {
        title: String,
        rating: Number,
        imageUrl: String,
        releaseDate: String
    }
}
</script>