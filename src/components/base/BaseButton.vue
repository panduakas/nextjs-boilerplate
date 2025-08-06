<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled || loading"
    :type="tag === 'button' ? type : undefined"
    :href="tag === 'a' ? href : undefined"
    :to="tag === 'router-link' ? to : undefined"
    @click="handleClick"
  >
    <v-icon
      v-if="prependIcon && !loading"
      :icon="prependIcon"
      class="mr-2"
      size="small"
    />
    
    <div
      v-if="loading"
      class="loading-spinner mr-2"
    />
    
    <span class="button-text">
      <slot />
    </span>
    
    <v-icon
      v-if="appendIcon && !loading"
      :icon="appendIcon"
      class="ml-2"
      size="small"
    />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'small' | 'medium' | 'large'
  tag?: 'button' | 'a' | 'router-link'
  type?: 'button' | 'submit' | 'reset'
  href?: string
  to?: string | object
  disabled?: boolean
  loading?: boolean
  block?: boolean
  rounded?: boolean
  elevated?: boolean
  prependIcon?: string
  appendIcon?: string
  animation?: 'none' | 'bounce' | 'pulse' | 'wiggle' | 'glow'
}

interface Emits {
  (e: 'click', event: Event): void
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  tag: 'button',
  type: 'button',
  disabled: false,
  loading: false,
  block: false,
  rounded: false,
  elevated: true,
  animation: 'none'
})

const emit = defineEmits<Emits>()

const buttonClasses = computed(() => {
  const classes = [
    'base-button',
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'transition-all',
    'duration-300',
    'ease-in-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'transform',
    'active:scale-95'
  ]

  // Variant styles
  switch (props.variant) {
    case 'primary':
      classes.push(
        'bg-primary-500',
        'text-white',
        'hover:bg-primary-600',
        'focus:ring-primary-500',
        'border-transparent'
      )
      if (props.elevated) {
        classes.push('shadow-md', 'hover:shadow-lg', 'hover:-translate-y-0.5')
      }
      break
    case 'secondary':
      classes.push(
        'bg-white',
        'text-primary-600',
        'border-2',
        'border-primary-500',
        'hover:bg-primary-50',
        'focus:ring-primary-500'
      )
      if (props.elevated) {
        classes.push('shadow-md', 'hover:shadow-lg', 'hover:-translate-y-0.5')
      }
      break
    case 'outline':
      classes.push(
        'bg-transparent',
        'text-secondary-700',
        'border-2',
        'border-secondary-300',
        'hover:bg-secondary-50',
        'hover:border-secondary-400',
        'focus:ring-secondary-500'
      )
      break
    case 'ghost':
      classes.push(
        'bg-transparent',
        'text-secondary-600',
        'hover:bg-secondary-100',
        'hover:text-secondary-800',
        'focus:ring-secondary-500'
      )
      break
    case 'danger':
      classes.push(
        'bg-red-500',
        'text-white',
        'hover:bg-red-600',
        'focus:ring-red-500',
        'border-transparent'
      )
      if (props.elevated) {
        classes.push('shadow-md', 'hover:shadow-lg', 'hover:-translate-y-0.5')
      }
      break
  }

  // Size styles
  switch (props.size) {
    case 'small':
      classes.push('px-3', 'py-1.5', 'text-sm')
      break
    case 'medium':
      classes.push('px-6', 'py-3', 'text-base')
      break
    case 'large':
      classes.push('px-8', 'py-4', 'text-lg')
      break
  }

  // Additional modifiers
  if (props.block) {
    classes.push('w-full')
  }

  if (props.rounded) {
    classes.push('rounded-full')
  } else {
    classes.push('rounded-lg')
  }

  if (props.disabled || props.loading) {
    classes.push('opacity-50', 'cursor-not-allowed', 'transform-none')
  }

  // Animation classes
  switch (props.animation) {
    case 'bounce':
      classes.push('hover:animate-bounce')
      break
    case 'pulse':
      classes.push('hover:animate-pulse')
      break
    case 'wiggle':
      classes.push('hover:animate-wiggle')
      break
    case 'glow':
      classes.push('hover:animate-glow')
      break
  }

  return classes
})

const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.base-button {
  position: relative;
  overflow: hidden;
}

.base-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.base-button:hover::before {
  left: 100%;
}

.button-text {
  position: relative;
  z-index: 1;
}

.loading-spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
