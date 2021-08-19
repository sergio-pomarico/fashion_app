/**
 * animations utils
 */

/**
 * Linear interpolation
 * @param value
 * @param x
 * @param y
 */
export const mix = (value: number, x: number, y: number) => {
  'worklet';
  return x * (1 - value) + y * value;
};

/**
 * @summary Select a point where the animation should snap to given the value of the gesture and it's velocity.
 */
export const generarteSnapPoint = (
  value: number,
  velocity: number,
  points: ReadonlyArray<number>,
): number => {
  'worklet';
  const point = value + 0.2 * velocity;
  const deltas = points.map(p => Math.abs(point - p));
  const minDelta = Math.min.apply(null, deltas);
  return points.filter(p => Math.abs(point - p) === minDelta)[0];
};

/**
 * return a unix date time
 * @param date with format 2011-10-05T00:00:00.000Z
 */
export const dateParser = (date: string): number => new Date(date).getTime();
