import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1)
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    }
  })
);

const AddRecipe = () => {
  const [title, setTitle] = React.useState("");
  const [largeCategory, setLargeCategory] = React.useState("");

  return (
    <>
      <TextField
        id="standard-basic"
        label="レシピタイトル"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(event.target.value)
        }
      />
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={largeCategory}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setLargeCategory(event.target.value)
        }
      >
        <MenuItem value={10}>デザート</MenuItem>
        <MenuItem value={20}> スナック</MenuItem>
        <MenuItem value={30}> メイン </MenuItem>
        <MenuItem value={40}> 副菜 </MenuItem>
        <MenuItem value={50}> 飲料　</MenuItem>
        <MenuItem value={60}> その他</MenuItem>
      </Select>
      <p>
        {title}
        {largeCategory}
      </p>
      {/*
          小カテゴリ
            ご飯
            麺
            パン
            サラダ
            スープ
            ケーキ
            クッキー
            肉
            魚
            たれソース
          所要時間
          材料
          作り方
          イメージ 
    */}
      {/* <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.margin}
      >
        Large
      </Button> */}
    </>
  );
};

export default AddRecipe;
