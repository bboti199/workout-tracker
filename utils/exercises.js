const data = [
  {
    bodyPart: 'chest',
    name: 'Barbell Bench Press',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/bb-bench-press.png?alt=media&token=54711d3a-3ef5-4404-9e55-bab12d54a7af'
  },
  {
    bodyPart: 'chest',
    name: 'Dumbbell Bench Press',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/db-bench-press.png?alt=media&token=bad0461e-fbe7-4cdb-8ef4-f93462ed0bcd'
  },
  {
    bodyPart: 'chest',
    name: 'Incline Barbell Bench Press',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/inc-bb-bench-press.png?alt=media&token=c04670ff-d1fb-4262-bc3b-1e8a772ce1b9'
  },
  {
    bodyPart: 'chest',
    name: 'Incline Dumbbell Bench Press',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/inc-db-bench-press.png?alt=media&token=771b4df3-a42f-4bf3-be03-f7674dfb6417'
  },
  {
    bodyPart: 'chest',
    name: 'Chest Press',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/chest-press.png?alt=media&token=5543984c-0f60-4687-b6af-e74d0a7b6be1'
  },
  {
    bodyPart: 'chest',
    name: 'Chest Dips',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/chest-dips.png?alt=media&token=55ffb7cd-1fbd-482c-80cc-72a94d1213ca'
  },
  {
    bodyPart: 'chest',
    name: 'Dumbbell Flyes',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/db-chest-flyes.png?alt=media&token=a591d7aa-9a75-4966-889f-8efe885b2bc5'
  },
  {
    bodyPart: 'chest',
    name: 'Butterfly Machine',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/butterfly-machine.png?alt=media&token=d817fc88-526f-4a2e-b932-60a9408e32c1'
  },
  {
    bodyPart: 'chest',
    name: 'Cable Crossovers',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/cable-crossovers.png?alt=media&token=5e0b33e8-def2-4168-a961-0de603b629a8'
  },
  {
    bodyPart: 'back',
    name: 'Pull Ups',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/pull-ups.png?alt=media&token=f83bedf5-ee36-4d0e-a053-03c194e0d02e'
  },

  {
    bodyPart: 'back',
    name: 'Chin Ups',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/chin-ups.png?alt=media&token=2e735e32-0cdb-4bcf-9b74-f2d189ea241d'
  },
  {
    bodyPart: 'back',
    name: 'Lat Pull-Down',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/lat-pulldown.png?alt=media&token=c50a3941-3c91-43ef-a7ef-a297ab8ba65f'
  },
  {
    bodyPart: 'back',
    name: 'Bent Over Barbell Row',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/barbell-row.png?alt=media&token=b2aab534-bfb4-4e62-b191-79577a831333'
  },
  {
    bodyPart: 'back',
    name: 'T-Bar Row',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/t-bar-rows.png?alt=media&token=f11b7c6f-e46a-40e6-ae50-393b9136a733'
  },
  {
    bodyPart: 'back',
    name: 'Seated Cable Rows',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/seated-cable-rows.png?alt=media&token=c9288181-9607-4fb8-bfca-8eb20b519c95'
  },
  {
    bodyPart: 'back',
    name: 'Shrugs',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/shrugs.png?alt=media&token=012d853c-fec4-4888-b895-5023465d4aae'
  },
  {
    bodyPart: 'back',
    name: 'Deadlift',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/deadlift.png?alt=media&token=d541e752-1d2e-4045-be27-8e6db4aa9104'
  },
  {
    bodyPart: 'shoulders',
    name: 'Seated Overhead Press',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/seated-overhead-press.png?alt=media&token=79c29d74-509c-4649-bdd2-14c25f469d9d'
  },
  {
    bodyPart: 'shoulders',
    name: 'Overhead Machine Press',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/overhead-machine-press.png?alt=media&token=2f02e25e-78a3-4cd7-bbb5-fcb7a831ea6c'
  },
  {
    bodyPart: 'shoulders',
    name: 'Arnold Press',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/arnold-press.png?alt=media&token=90ab7b5c-0acf-4a5d-9cee-2de89696de7f'
  },
  {
    bodyPart: 'shoulders',
    name: 'Upright Rows',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/upright-rows.png?alt=media&token=3c9ddef4-9515-4945-a205-29fcc5b55187'
  },
  {
    bodyPart: 'shoulders',
    name: 'Lateral Raises',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/db-lateral-raises.png?alt=media&token=53474962-d71b-456a-8ae5-a9579b099c01'
  },
  {
    bodyPart: 'shoulders',
    name: 'Front Raises',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/front-raises.png?alt=media&token=7223891a-97e7-402c-a3ed-0a602e334d36'
  },
  {
    bodyPart: 'shoulders',
    name: 'Military Press',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/military-press.png?alt=media&token=d0e7767f-973d-48a6-bd88-272ca066a486'
  },
  {
    bodyPart: 'quads',
    name: 'Squats',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/bb-squats.png?alt=media&token=fbdbdca8-43b3-410c-aadd-7b0de47dcc41'
  },
  {
    bodyPart: 'quads',
    name: 'Front Squats',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/bb-front-squats.png?alt=media&token=ad022162-f643-46dc-ba2b-9cf33e98ef8a'
  },
  {
    bodyPart: 'quads',
    name: 'Split Squats',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/split-squats.png?alt=media&token=64f0964c-9fc6-44c3-a44c-278815f15ac9'
  },
  {
    bodyPart: 'quads',
    name: 'Lunges',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/lunges.png?alt=media&token=4fff9a7d-0cba-4658-b065-3d5801567d3f'
  },
  {
    bodyPart: 'quads',
    name: 'Leg Press',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/leg-press.png?alt=media&token=53402759-2f1c-4e62-8876-dc8c67cdc549'
  },
  {
    bodyPart: 'quads',
    name: 'Machine Squat',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/machine-squats.png?alt=media&token=0ecfb29c-b07b-4013-a0d8-bd07cad25770'
  },
  {
    bodyPart: 'quads',
    name: 'Leg Extensions',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/leg-extensions.png?alt=media&token=632eeca5-fc32-44b3-83a8-b02424c160cf'
  },
  {
    bodyPart: 'hamstrings',
    name: 'Romanian Deadlift',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/romanian-deadlift.png?alt=media&token=449d95ce-8624-4ebe-9c65-abc748ea0f71'
  },
  {
    bodyPart: 'hamstrings',
    name: 'Sumo Deadlift'
  },
  {
    bodyPart: 'hamstrings',
    name: 'Hyperextensions',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/hyperextensions.png?alt=media&token=dadf245c-0320-4a52-a918-ff5429ef3529'
  },
  {
    bodyPart: 'hamstrings',
    name: 'Leg Curls',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/leg-curls.png?alt=media&token=7636f3cc-36d9-49de-b5f8-ae0315960f2b'
  },
  {
    bodyPart: 'biceps',
    name: 'Standing Barbell Curls',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/standing-biceps-curls.png?alt=media&token=1763cd98-0948-4481-91c3-8a218a65fe4b'
  },
  {
    bodyPart: 'biceps',
    name: 'Standing Dumbbell Curls',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/standing-db-curls.png?alt=media&token=3d2c7df3-ad7b-42e8-bfcd-badec72551e0'
  },
  {
    bodyPart: 'biceps',
    name: 'Seated Dumbbell Curls',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/seated-db-curls.png?alt=media&token=6ad46c91-b464-4fcd-911e-5d64436475a1'
  },
  {
    bodyPart: 'biceps',
    name: 'Hammer Curls',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/hammer-curls.png?alt=media&token=4e339f2b-2e16-4837-ba91-8a32238d26e3'
  },
  {
    bodyPart: 'biceps',
    name: 'Cable Curls',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/cable-curls.png?alt=media&token=b5856bfe-2074-47e1-b736-95e2eb6adb46'
  },
  {
    bodyPart: 'biceps',
    name: 'Biceps Curl Machine',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/machine-curls.png?alt=media&token=22966b6a-472f-40fa-87e3-9d2f2ad07e04'
  },
  {
    bodyPart: 'biceps',
    name: 'Preacher Curls',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/preacher-curls.png?alt=media&token=5eedc4b3-24e5-4eb3-ad5d-21faf833bb7f'
  },
  {
    bodyPart: 'triceps',
    name: 'Dips',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/dips.png?alt=media&token=f959a0b0-a240-42e2-9c80-6c59731656ff'
  },
  {
    bodyPart: 'triceps',
    name: 'Close Grip Bench Press',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/close-grip-bb-bench-press.png?alt=media&token=ea9d6098-166a-493f-90f3-a9e273818615'
  },
  {
    bodyPart: 'triceps',
    name: 'Lying Triceps Extensions',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/lying-triceps-extensions.png?alt=media&token=28918336-01d4-4c66-b982-c9f039ac7da6'
  },
  {
    bodyPart: 'triceps',
    name: 'Skull Crushers',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/skull-crashers.png?alt=media&token=1dd8ae24-2806-4bc6-a3c1-b225bf3ab3d2'
  },
  {
    bodyPart: 'triceps',
    name: 'Overhead Triceps Extensions',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/overhead-triceps-extensions.png?alt=media&token=120d780e-970d-4664-9cd5-91739cedd2ba'
  },
  {
    bodyPart: 'triceps',
    name: 'Cable Push-Downs',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/cable-pushdown.png?alt=media&token=d8cb0b2a-704a-4307-bcb6-e4e662cd9926'
  },
  {
    bodyPart: 'abs',
    name: 'Crunches',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/crunches.png?alt=media&token=65499946-7923-4fc6-82df-3b8b71230902'
  },
  {
    bodyPart: 'abs',
    name: 'Ab Machine'
  },
  {
    bodyPart: 'abs',
    name: 'Hanging Leg Raises',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/hanging-leg-raise.png?alt=media&token=f805f749-3fb5-47a0-8bc0-4ce521d149cf'
  },
  {
    bodyPart: 'abs',
    name: 'Decline Crunches',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/progressive-overload-63896.appspot.com/o/decline-crunches.png?alt=media&token=a6169472-bc77-49c8-9615-f933c7254bb7'
  }
];

module.exports = data;
