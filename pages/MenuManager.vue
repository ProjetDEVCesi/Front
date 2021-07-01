<template>
  <div>
    <SegmentNav />
    <ItemsList hidden />
    <ItemsDetail hidden />
    <MenusList hidden />
    <MenusDetail />
  </div>
</template>

<script>
import SegmentNav from '@/components/SegmentNav'
import ItemsList from '@/components/ItemsList'
import MenusList from '@/components/MenusList'
import ItemsDetail from '@/components/ItemsDetail'
import MenusDetail from '@/components/MenusDetail'

export default {
  components: {
    SegmentNav,
    ItemsList,
    ItemsDetail,
    MenusList,
    MenusDetail,
  },
  layout: 'NavDesktop',
}
</script>
