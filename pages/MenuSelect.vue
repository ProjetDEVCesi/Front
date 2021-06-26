<template>
  <div>
    <RadioCard />
    <TextAreaCard />
    <SelectCard />
    <CheckboxCard />
  </div>
</template>

<script>
import RadioCard from '@/components/RadioCard'
import TextAreaCard from '@/components/TextAreaCard'
import SelectCard from '@/components/SelectCard'
import CheckboxCard from '@/components/CheckboxCard'

export default {
  components: {
    RadioCard,
    TextAreaCard,
    SelectCard,
    CheckboxCard,
  },
}
</script>
