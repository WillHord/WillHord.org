<script lang="ts">
  import { T } from "@threlte/core";
  import { SheetObject } from "@threlte/theatre";
  import StarField from "./StarField.svelte";

  interface Props {
    key: string;
  }

  let { key }: Props = $props();
</script>

<SheetObject {key}>
  {#snippet children({ Transform, Declare })}
    <Transform>
      <T.Group>
        <Declare
          props={{
            amount: 1000,
            radius: 100,
            size: 0.2,
            speed: 1,
            direction: {
              x: 0,
              y: 1,
              z: 1,
            },
            opacity: 1,
          }}
        >
          {#snippet children({ values })}
            {#key `${values.amount}-${values.radius}`}
              <StarField
                amount={values.amount}
                radius={values.radius}
                size={values.size}
                speed={values.speed}
                direction={[
                  values.direction.x,
                  values.direction.y,
                  values.direction.z,
                ]}
                opacity={values.opacity}
              />
            {/key}
          {/snippet}
        </Declare>
      </T.Group>
    </Transform>
  {/snippet}
</SheetObject>
