export function configureBot(rg) {
  rg.characterConfig = {
    speed: 4000
  };
}

var startTime = null

export async function processTick(rg) {

  if (!startTime) startTime = new Date().getTime();

  let powerUps = rg.findEntities("PowerUp")
  if (powerUps) {
    rg.performAction("MoveToPosition", powerUps[0].position)
  }

  if (new Date().getTime() - startTime > 5000) {
    // Now try to finish
    rg.complete();
  }

}