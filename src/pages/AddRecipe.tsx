import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: '100%'
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    chip: {
      margin: 2
    }
  })
);

const AddRecipe = () => {
  const classes = useStyles();
  const [title, setTitle] = React.useState('');
  const [largeCategory, setLargeCategory] = React.useState('');
  const [smallCategory, setSmallCategory] = React.useState<string[]>([]);
  const [requireTime, setRequireTime] = React.useState(0);
  const [ingredient, setIngredient] = React.useState('');
  const [recipeText, setRecipeText] = React.useState('');

  const smallCategoryList = [
    'ご飯',
    '麺',
    'パン',
    'サラダ',
    'スープ',
    'ケーキ',
    'クッキー',
    '肉',
    '魚',
    'たれソース'
  ];

  return (
    <>
      <FormControl className={classes.formControl}>
        <TextField
          id="standard-basic"
          label="レシピタイトル"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">大カテゴリ</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={largeCategory}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
            setLargeCategory(event.target.value as string)
          }
        >
          <MenuItem value={1}>デザート</MenuItem>
          <MenuItem value={2}> スナック</MenuItem>
          <MenuItem value={3}> メイン </MenuItem>
          <MenuItem value={4}> 副菜 </MenuItem>
          <MenuItem value={5}> 飲料　</MenuItem>
          <MenuItem value={6}> その他</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">小カテゴリ</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={smallCategory}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
            setSmallCategory(event.target.value as string[])
          }
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {(selected as string[]).map(value => (
                <Chip
                  key={value}
                  label={value}
                  className={classes.chip}
                  color="primary"
                />
              ))}
            </div>
          )}
        >
          {smallCategoryList.map(category => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="standard-number"
          label="所要時間(分)"
          type="number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setRequireTime(Number(event.target.value))
          }
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="standard-multiline-static"
          label="材料"
          multiline
          rows={2}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setIngredient(event.target.value)
          }
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="standard-multiline-static"
          label="作り方"
          multiline
          rows={6}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setRecipeText(event.target.value)
          }
        />
      </FormControl>
      {/* TODO: イメージアップロード実装  */}
    </>
  );
};

export default AddRecipe;
