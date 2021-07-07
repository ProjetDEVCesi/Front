<template>
  <div>
    <SegmentNav @notify1="show = 1" @notify2="show = 2" @notify3="show = 3" />
    <div class="md:w-2/3 m-auto">
      <OverviewManager v-if="show === 1" />
      <MenusList v-if="show === 2" @notify="show = 4" />
      <ItemsList v-if="show === 3" @notify="show = 5" />
      <MenusDetail v-if="show === 4" />
      <ItemsDetail v-if="show === 5" />
    </div>
  </div>
</template>

<script>
import SegmentNav from '@/components/SegmentNav'
import OverviewManager from '@/components/OverviewManager'
import ItemsList from '@/components/ItemsList'
import MenusList from '@/components/MenusList'
import ItemsDetail from '@/components/ItemsDetail'
import MenusDetail from '@/components/MenusDetail'

export default {
  components: {
    SegmentNav,
    OverviewManager,
    ItemsList,
    ItemsDetail,
    MenusList,
    MenusDetail,
  },
  layout: 'NavManager',
  data() {
    return {
      show: 1,
    }
  },
}
</script>
