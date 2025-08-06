<template>
  <div
    :class="cardClasses"
    @click="handleClick"
  >
    <div
      v-if="$slots.image || image"
      class="card-image"
    >
      <slot name="image">
        <img
          v-if="image"
          :src="image"
          :alt="imageAlt"
          class="w-full h-full object-cover"
        >
      </slot>
    </div>

    <div
      v-if="$slots.header || title"
      class="card-header"
      :class="headerClasses"
    >
      <slot name="header">
        <h3
          v-if="title"
          class="card-title"
          :class="titleClasses"
        >
          {{ title }}
        </h3>
        <p
          v-if="subtitle"
          class="card-subtitle"
          :class="subtitleClasses"
        >
          {{ subtitle }}
        </p>
      </slot>
    </div>

    <div
      v-if="$slots.default"
      class="card-content"
      :class="contentClasses"
    >
      <slot />
    </div>

    <div
      v-if="$slots.actions"
      class="card-actions"
      :class="actionsClasses"
    >
      <slot name="actions" />
    </div>

    <div
      v-if="$slots.footer"
      class="card-footer"
      :class="footerClasses"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'elevated' | 'outlined' | 'flat' | 'glass'
  size?: 'small' | 'medium' | 'large'
  rounded?: boolean | 'small' | 'medium' | 'large' | 'full'
  hover?: boolean
  clickable?: boolean
  loading?: boolean
  disabled?: boolean
  image?: string
  imageAlt?: string
  title?: string
  subtitle?: string
  padding?: boolean | 'small' | 'medium' | 'large'
  headerPadding?: boolean | 'small' | 'medium' | 'large'
  contentPadding?: boolean | 'small' | 'medium' | 'large'
  actionsPadding?: boolean | 'small' | 'medium' | 'large'
  footerPadding?: boolean | 'small' | 'medium' | 'large'
  animation?: 'none' | 'fade' | 'scale' | 'slide' | 'bounce'
}

interface Emits {
  (e: 'click', event: Event): void
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'medium',
  rounded: true,
  hover: true,
  clickable: false,
  loading: false,
  disabled: false,
  imageAlt: '',
  padding: true,
  headerPadding: true,
  contentPadding: true,
  actionsPadding: true,
  footerPadding: true,
  animation: 'none'
})

const emit = defineEmits<Emits>()

const cardClasses = computed(() => {
  const classes = [
    'base-card',
    'relative',
    'overflow-hidden',
    'transition-all',
    'duration-300',
    'ease-in-out'
  ]

  // Variant styles
  switch (props.variant) {
    case 'default':
      classes.push('bg-white', 'border', 'border-secondary-200')
      break
    case 'elevated':
      classes.push(
        'bg-white',
        'shadow-md',
        'border',
        'border-secondary-100'
      )
      break
    case 'outlined':
      classes.push(
        'bg-transparent',
        'border-2',
        'border-secondary-300'
      )
      break
    case 'flat':
      classes.push('bg-secondary-50')
      break
    case 'glass':
      classes.push(
        'glass-effect',
        'border',
        'border-white/20'
      )
      break
  }

  // Rounded styles
  if (props.rounded === true || props.rounded === 'medium') {
    classes.push('rounded-xl')
  } else if (props.rounded === 'small') {
    classes.push('rounded-lg')
  } else if (props.rounded === 'large') {
    classes.push('rounded-2xl')
  } else if (props.rounded === 'full') {
    classes.push('rounded-full')
  }

  // Hover effects
  if (props.hover && !props.disabled) {
    if (props.variant === 'elevated') {
      classes.push('hover:shadow-xl', 'hover:-translate-y-1')
    } else {
      classes.push('hover:shadow-lg', 'hover:-translate-y-0.5')
    }
  }

  // Clickable
  if (props.clickable && !props.disabled) {
    classes.push('cursor-pointer', 'active:scale-95')
  }

  // Disabled state
  if (props.disabled) {
    classes.push('opacity-50', 'cursor-not-allowed')
  }

  // Loading state
  if (props.loading) {
    classes.push('animate-pulse')
  }

  // Animation classes
  switch (props.animation) {
    case 'fade':
      classes.push('animate-fade-in')
      break
    case 'scale':
      classes.push('animate-scale-in')
      break
    case 'slide':
      classes.push('animate-slide-up')
      break
    case 'bounce':
      classes.push('animate-bounce')
      break
  }

  return classes
})

const getPaddingClasses = (padding: boolean | string | undefined) => {
  if (padding === false) return []
  if (padding === 'small') return ['p-3']
  if (padding === 'large') return ['p-8']
  return ['p-6'] // medium/default
}

const headerClasses = computed(() => {
  const classes = getPaddingClasses(props.headerPadding)
  if (props.contentPadding !== false) {
    classes.push('pb-0')
  }
  return classes
})

const contentClasses = computed(() => {
  return getPaddingClasses(props.contentPadding)
})

const actionsClasses = computed(() => {
  const classes = getPaddingClasses(props.actionsPadding)
  classes.push('flex', 'items-center', 'justify-end', 'space-x-2')
  if (props.contentPadding !== false) {
    classes.push('pt-0')
  }
  return classes
})

const footerClasses = computed(() => {
  const classes = getPaddingClasses(props.footerPadding)
  classes.push('border-t', 'border-secondary-100', 'bg-secondary-50/50')
  return classes
})

const titleClasses = computed(() => {
  const classes = ['font-semibold', 'text-secondary-900']
  
  switch (props.size) {
    case 'small':
      classes.push('text-lg')
      break
    case 'large':
      classes.push('text-2xl')
      break
    default:
      classes.push('text-xl')
  }
  
  return classes
})

const subtitleClasses = computed(() => {
  const classes = ['text-secondary-600', 'mt-1']
  
  switch (props.size) {
    case 'small':
      classes.push('text-sm')
      break
    case 'large':
      classes.push('text-lg')
      break
    default:
      classes.push('text-base')
  }
  
  return classes
})

const handleClick = (event: Event) => {
  if (props.clickable && !props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.base-card {
  position: relative;
}

.base-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.base-card:hover::before {
  opacity: 1;
}

.card-image {
  position: relative;
  overflow: hidden;
}

.card-image img {
  transition: transform 0.3s ease;
}

.base-card:hover .card-image img {
  transform: scale(1.05);
}

.glass-effect {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.8);
}

.card-title {
  line-height: 1.2;
}

.card-subtitle {
  line-height: 1.4;
}
</style>
