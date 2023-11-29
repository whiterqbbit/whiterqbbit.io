<template>
  <div class="m-auto text-center flex place-content-center place-items-center u-spin-me-right-round">
    <GlowCard class="u-spin-me-right-round">
      <template #default>
        <GlowCard class="u-spin-me-right-round">
          <template #default>
            <GlowCard class="u-spin-me-right-round">
              <template #default>
                <GlowCard class="u-spin-me-right-round">
                  <template #default>
                    <GlowCard class="u-spin-me-right-round">
                      <template #default>
                        <GlowCard class="u-spin-me-right-round">
                          <template #default>
                            <GlowCard class="u-spin-me-right-round">
                              <template #default>
                                <GlowCard title="404 frero" class="u-spin-me-right-round cursor-none">
                                  <template #default>
                                    lol
                                  </template>
                                </glowcard>
                              </template>
                            </GlowCard>
                          </template>
                        </GlowCard>
                      </template>
                    </GlowCard>
                  </template>
                </GlowCard>
              </template>
            </GlowCard>
          </template>
        </GlowCard>
      </template>
    </glowcard>
  </div>
</template>

<style>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.u-spin-me-right-round:hover {
  animation: spin 6s ease-in-out infinite;
}
</style>
